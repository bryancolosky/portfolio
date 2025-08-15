'use client';

// 🔌 Vendors
import React, {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
  memo
} from 'react';

// 🔩 Components

// 🎨 Styles
import '@/ui/styles/globals.scss';

export interface ValueObject {
  [appearanceName: string]: string;
}

export interface UseAppAppearanceProps {
  appearances: string[];
  forcedAppAppearance?: string;
  setAppAppearance: (appearance: string) => void;
  appearance?: string;
  resolvedAppAppearance?: string;
  systemAppAppearance?: 'dark' | 'light';
}

export type AppAppearanceType = React.ReactNode;

export interface AppAppearanceProps {
  appearances?: string[];
  forcedAppAppearance?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  enableColorScheme?: boolean;
  storageKey?: string;
  defaultAppAppearance?: string;
  attribute?: string | 'class';
  value?: ValueObject;
  nonce?: string;
  children?: React.ReactNode;
}

const colorSchemes = ['light', 'dark'];
const defaultAppAppearances = ['light', 'dark'];
const STORAGE_KEY = 'appearance';

const prefersDark = '(prefers-color-scheme: dark)';
const isServer = typeof window === 'undefined';

export const AppAppearanceContext = createContext<
  UseAppAppearanceProps | undefined
>(undefined);

export const defaultContext: UseAppAppearanceProps = {
  setAppAppearance: () => {},
  appearances: []
};

export const useAppAppearance = () =>
  useContext(AppAppearanceContext) ?? defaultContext;

export const getAppAppearance = (key: string, fallback?: string) => {
  if (isServer) return undefined;
  let appearance;
  try {
    appearance = localStorage.getItem(key) || undefined;
  } catch (e) {}
  return appearance || fallback;
};

export const getSystemAppAppearance = (
  event?: MediaQueryList | MediaQueryListEvent
) => {
  if (!event) event = window.matchMedia(prefersDark);
  const isDark = event.matches;
  const systemAppAppearance = isDark ? 'dark' : 'light';
  return systemAppAppearance;
};

export const disableAnimation = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      `* {
        -webkit-transition:none!important;
        -moz-transition:none!important;
        -o-transition:none!important;
        -ms-transition:none!important;
        transition:none!important
      }`
    )
  );
  document.head.appendChild(css);

  return () => {
    (() => window.getComputedStyle(document.body))();

    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

export const AppAppearanceScript = memo(
  ({
    forcedAppAppearance,
    storageKey,
    attribute,
    enableSystem,
    enableColorScheme,
    defaultAppAppearance,
    value,
    attrs,
    nonce
  }: AppAppearanceProps & {
    attrs: string[];
    defaultAppAppearance: string;
  }) => {
    const defaultSystem = defaultAppAppearance === 'system';

    const optimization = (() => {
      if (attribute === 'class') {
        const removeClasses = `c.remove(${attrs
          .map((t: string) => `'${t}'`)
          .join(',')})`;

        return `var d=document.documentElement,c=d.classList; ${removeClasses};`;
      } else {
        return `var d=document.documentElement,n='${attribute}',s='setAttribute';`;
      }
    })();

    const fallbackColorScheme = (() => {
      if (!enableColorScheme) {
        return '';
      }

      const fallback = colorSchemes.includes(defaultAppAppearance)
        ? defaultAppAppearance
        : null;

      if (fallback) {
        return `if (e === 'light' || e === 'dark' || !e) d.style.colorScheme =  e || '${defaultAppAppearance}'`;
      } else {
        return `if (e === 'light' || e==='dark') d.style.colorScheme = e`;
      }
    })();

    const updateDOM = (
      name: string,
      literal: boolean = false,
      setColorScheme = true
    ) => {
      const resolvedName = value ? value[name] : name;
      const val = literal ? name + `|| ''` : `'${resolvedName}'`;
      let text = '';

      if (
        enableColorScheme &&
        setColorScheme &&
        !literal &&
        colorSchemes.includes(name)
      ) {
        text += `d.style.colorScheme = '${name}';`;
      }

      if (attribute === 'class') {
        if (literal || resolvedName) {
          text += `c.add(${val})`;
        } else {
          text += `null`;
        }
      } else {
        if (resolvedName) {
          text += `d[s](n,${val})`;
        }
      }

      return text;
    };

    const scriptSrc = (() => {
      if (forcedAppAppearance) {
        return `!function() {
          ${optimization}
          ${updateDOM(forcedAppAppearance)}
        } ()`;
      }

      if (enableSystem) {
        return `!function() {
            try {
              ${optimization}

            var e=localStorage.getItem('${storageKey}');
            
            if ('system' === e ||( !e && ${defaultSystem})) {
              var t='${prefersDark}',
              m=window.matchMedia(t);
              if(m.media !== t || m.matches){
                ${updateDOM('dark')}
              } else {
                ${updateDOM('light')}
              }
            } else if (e) {${value ? `var x=${JSON.stringify(value)};` : ''}
          
          ${updateDOM(value ? `x[e]` : 'e', true)}}
          
          ${
            !defaultSystem
              ? `else {` + updateDOM(defaultAppAppearance, false, false) + '}'
              : ''
          }
          
          ${fallbackColorScheme}
          }
            catch(e) {}
          } ()`;
      }

      return `!function() {
        try {
          ${optimization} var e=localStorage.getItem('${storageKey}');

          if(e) {
          ${value ? `var x=${JSON.stringify(value)};` : ''}
          ${updateDOM(value ? `x[e]` : 'e', true)}

        } else {
          ${updateDOM(defaultAppAppearance, false, false)};
        }
          ${fallbackColorScheme}
        }
          catch(t) {}
      } ();`;
    })();

    return (
      <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />
    );
  },
  () => true
);

export const AppAppearanceProvider = ({
  forcedAppAppearance,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = STORAGE_KEY,
  appearances = defaultAppAppearances,
  defaultAppAppearance = enableSystem ? 'system' : 'light',
  attribute = 'data-appearance',
  value,
  children,
  nonce
}: AppAppearanceProps) => {
  const [appearance, setAppAppearanceState] = useState(() =>
    getAppAppearance(storageKey, defaultAppAppearance)
  );

  const [resolvedAppAppearance, setResolvedAppAppearance] = useState(() =>
    getAppAppearance(storageKey)
  );

  const attrs = !value ? appearances : Object.values(value);

  const applyAppAppearance = useCallback((appearance?: string) => {
    let resolved = appearance;
    if (!resolved) return;

    if (appearance === 'system' && enableSystem) {
      resolved = getSystemAppAppearance();
    }

    const name = value ? value[resolved] : resolved;

    const enable = disableTransitionOnChange ? disableAnimation() : null;

    const doc = document.documentElement;

    if (attribute === 'class') {
      doc.classList.remove(...attrs);

      if (name) doc.classList.add(name);
    } else {
      if (name) {
        doc.setAttribute(attribute, name);
      } else {
        doc.removeAttribute(attribute);
      }
    }

    if (enableColorScheme) {
      const fallback = colorSchemes.includes(defaultAppAppearance)
        ? defaultAppAppearance
        : 'system';
      const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback;
      doc.style.colorScheme = colorScheme;
    }

    enable?.();
  }, []);

  const setAppAppearance = useCallback(
    (appearance: string) => {
      setAppAppearanceState(appearance);
      try {
        localStorage.setItem(storageKey, appearance);
      } catch (e) {}
    },
    [forcedAppAppearance]
  );

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemAppAppearance(e);
      setResolvedAppAppearance(resolved);

      if (appearance === 'system' && enableSystem && !forcedAppAppearance) {
        applyAppAppearance('system');
      }
    },
    [appearance, forcedAppAppearance]
  );

  useEffect(() => {
    const media = window.matchMedia(prefersDark);

    media.addEventListener('change', handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeEventListener('change', handleMediaQuery);
  }, [handleMediaQuery]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }
      const appearance = e.newValue || defaultAppAppearance;
      setAppAppearance(appearance);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setAppAppearance]);

  useEffect(() => {
    applyAppAppearance(forcedAppAppearance ?? appearance);
  }, [forcedAppAppearance, appearance]);

  const providerValue = useMemo(
    () => ({
      appearance,
      setAppAppearance,
      forcedAppAppearance,
      resolvedAppAppearance:
        appearance === 'system' ? resolvedAppAppearance : appearance,
      appearances: enableSystem ? [...appearances, 'system'] : appearances,
      systemAppAppearance: (enableSystem
        ? resolvedAppAppearance
        : undefined) as 'light' | 'dark' | undefined
    }),
    [
      appearance,
      setAppAppearance,
      forcedAppAppearance,
      resolvedAppAppearance,
      enableSystem,
      appearances
    ]
  );

  return (
    <AppAppearanceContext.Provider value={providerValue}>
      <AppAppearanceScript
        {...{
          forcedAppAppearance,
          disableTransitionOnChange,
          enableSystem,
          enableColorScheme,
          storageKey,
          appearances,
          defaultAppAppearance,
          attribute,
          value,
          children,
          attrs,
          nonce
        }}
      />
      {children}
    </AppAppearanceContext.Provider>
  );
};

export const AppAppearance = (props: AppAppearanceProps): AppAppearanceType => {
  const context = useContext(AppAppearanceContext);

  if (context) return <Fragment>{props.children}</Fragment>;

  return <AppAppearanceProvider {...props} />;
};

export default AppAppearanceProvider;
