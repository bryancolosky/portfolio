import { useCallback } from 'react';

export const useDisableClick = (
  disabled?: boolean,
  handleClick?: () => void
) => {
  const handleClickWrapper = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [disabled]
  );

  if (!disabled) {
    return handleClick;
  }

  return handleClickWrapper;
};

export function useDisableKeyboard(
  disabled?: boolean,
  handleKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
) {
  const handleKeyDownWrapper = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled && (event?.key === ' ' || event.key === 'Enter')) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [disabled]
  );

  if (!disabled) {
    return handleKeyDown;
  }

  return handleKeyDownWrapper;
}
