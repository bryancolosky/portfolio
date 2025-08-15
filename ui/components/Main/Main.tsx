'use client';

// 🔌 Vendors
import React, { useLayoutEffect } from 'react';
import anime from 'animejs';
import imagesLoaded from 'imagesloaded';
import scrollMonitor from 'scrollmonitor';

// 🔩 Components
import Morph, { shapes } from '@/ui/components/Morph';
import { MorphSection } from '@/ui/components/Morph/elements';
import { MorphSections } from '@/ui/components/Morph/elements';

// 🎨 Styles
import styles from './Main.module.scss';
import Box from '../Box';

export type MainType = React.ReactNode | React.ReactElement;

export interface MainProps {
  animate?: boolean;
  children?: React.ReactNode;
}

export interface DOMProps {
  svg?: Element | null;
  shapeEl?: Element | null;
  sectionElems?: HTMLElement[] | null;
  footer?: HTMLElement | null;
}

export const Main = ({ animate, children }: MainProps): MainType => {
  animate
    ? useLayoutEffect(() => {
      const DOM: DOMProps = {};

      DOM.svg = document.getElementById(`morph`);

      if (DOM.svg !== null) {
        DOM.shapeEl = DOM.svg.querySelector(`path`);
      }

      DOM.sectionElems = Array.from(
        document.documentElement.querySelectorAll(`section`)
      );

      const sectionElemsTotal = DOM.sectionElems!.length;

      DOM.footer = document.querySelector(`footer`);

      let step: number;

      const initShapeLoop = (pos: number) => {
        pos = pos || 0;
        if (DOM.shapeEl) {
          anime.remove(DOM.shapeEl);
        }
        anime({
          targets: DOM.shapeEl,
          easing: shapes[pos].animation.path.easing,
          d: [
            {
              value: shapes[pos].pathAlt,
              duration: shapes[pos].animation.path.duration
            },
            {
              value: shapes[pos].path,
              duration: shapes[pos].animation.path.duration
            }
          ],
          loop: true,
          direction: 'alternate'
        });
      };
      if (DOM.svg) {
        anime.remove(DOM.svg);
      }
      const initShapeEl = () => {
        if (DOM.svg) {
          anime.remove(DOM.svg);
        }
        anime({
          targets: DOM.svg,
          easing: shapes[0].animation.svg.easing,
          scaleX: shapes[0].scaleX,
          scaleY: shapes[0].scaleY,
          translateX: shapes[0].tx + 'px',
          translateY: shapes[0].ty + 'px',
          rotate: shapes[0].rotate + 'deg'
        });
        initShapeLoop(0);
      };

      const createScrollWatchers = () => {
        DOM.sectionElems!.forEach((el, pos) => {
          const scrollElemToWatch = pos ? DOM.sectionElems![pos] : DOM.footer;
          pos = pos ? pos : sectionElemsTotal;
          const watcher = scrollMonitor.create(scrollElemToWatch!, 0);

          watcher.enterViewport(function () {
            console.log(`${pos} enter`);
            step = pos;
            if (DOM.shapeEl) {
              anime.remove(DOM.shapeEl);
            }
            anime({
              targets: DOM.shapeEl,
              duration: shapes[pos].animation.path.duration,
              easing: shapes[pos].animation.path.easing,
              // elasticity: shapes[pos].animation.path.elasticity || 0,
              d: shapes[pos].path,
              complete: function () {
                initShapeLoop(pos);
              }
            });
            if (DOM.svg) {
              anime.remove(DOM.svg);
            }
            anime({
              targets: DOM.svg,
              duration: shapes[pos].animation.svg.duration,
              easing: shapes[pos].animation.svg.easing,
              // elasticity: shapes[pos].animation.svg.elasticity || 0,
              scaleX: shapes[pos].scaleX,
              scaleY: shapes[pos].scaleY,
              translateX: shapes[pos].tx + 'px',
              translateY: shapes[pos].ty + 'px',
              rotate: shapes[pos].rotate + 'deg'
            });
          }, false);

          watcher.exitViewport(function () {
            console.log(pos + 'exit');

            const idx = !watcher.isAboveViewport ? pos - 1 : pos + 1;

            if (idx <= sectionElemsTotal && step !== idx) {
              step = idx;
              if (DOM.shapeEl) {
                anime.remove(DOM.shapeEl);
              }
              anime({
                targets: DOM.shapeEl,
                duration: shapes[idx].animation.path.duration,
                easing: shapes[idx].animation.path.easing,
                // elasticity: shapes[idx].animation.path.elasticity || 0,
                d: shapes[idx].path,
                complete: function () {
                  initShapeLoop(idx);
                }
              });
              if (DOM.svg) {
                anime.remove(DOM.svg);
              }
              anime({
                targets: DOM.svg,
                duration: shapes[idx].animation.svg.duration,
                easing: shapes[idx].animation.svg.easing,
                // elasticity: shapes[idx].animation.svg.elasticity || 0,
                scaleX: shapes[idx].scaleX,
                scaleY: shapes[idx].scaleY,
                translateX: shapes[idx].tx + 'px',
                translateY: shapes[idx].ty + 'px',
                rotate: shapes[idx].rotate + 'deg'
              });
            }
          }, false);
        });
      };

      imagesLoaded(document.documentElement, () => {
        createScrollWatchers();
        initShapeEl();
      });
    })
    : null;

  return (
    <Box
      id="main"
      role="group"
      width="100%"
      paddingBlock={'none'}
      paddingInline={{
        mobileSm: 'base',
        tablet: 'loose',
        laptop: 'jumbo'
      }}
      as="main"
    >
      {animate ? <MorphSections
        children={children}
        renderSection={(section, id, isScrolled) => (
          <MorphSection id={id} isScrolled={isScrolled} children={section} />
        )}
      /> : children}
      {animate ? <Morph /> : null}
    </Box>
  );
};

export default Main;
