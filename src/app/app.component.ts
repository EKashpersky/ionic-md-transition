import { Component } from '@angular/core';
import { Animation, createAnimation, iosTransitionAnimation, TransitionOptions } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public readonly routerOutletAnimation: (_: HTMLElement, opts: TransitionOptions) => Animation;

  constructor() {
    const dpToPx = (n: number) => window.devicePixelRatio * n;

    this.routerOutletAnimation = (_: HTMLElement, opts: TransitionOptions): Animation => {
      if (opts.mode === 'ios') {
        return iosTransitionAnimation(_, opts);
      }

      const enteringEl = opts.enteringEl;
      const leavingEl  = opts.leavingEl;

      // choose from/to transforms depending on navigation direction
      let enterFrom: string, enterTo: string, leaveFrom: string, leaveTo: string;
      if (opts.direction === 'forward') {
        enterFrom = `translateX(${dpToPx(30)}px)`;
        enterTo   = 'translateX(0%)';
        leaveFrom = 'translateX(0%)';
        leaveTo   = `translateX(-${dpToPx(30)}px)`;
      } else {
        enterFrom = `translateX(-${dpToPx(30)}px)`;
        enterTo   = 'translateX(0%)';
        leaveFrom = 'translateX(0%)';
        leaveTo   = `translateX(${dpToPx(30)}px)`;
      }

      const rootAninmation = createAnimation();

      const enterFade = createAnimation()
        .addElement(enteringEl)
        .delay(100)
        .duration(200)
        .easing('cubic-bezier(0.0, 0.0, 0.2, 1.0)')
        .fromTo('opacity', '0', '1');
      const enterSlide = createAnimation()
        .addElement(enteringEl)
        .duration(300)
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', enterFrom, enterTo);

      rootAninmation.addAnimation([ enterFade, enterSlide ]);

      if (leavingEl) {
        const exitFade = createAnimation()
          .addElement(leavingEl)
          .duration(100)
          .easing('cubic-bezier(0.4, 0.0, 1.0, 1.0)')
          .fromTo('opacity', '1', '0');
        const exitSlide = createAnimation()
          .duration(300)
          .addElement(leavingEl)
          .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
          .fromTo('transform', leaveFrom, leaveTo);

        rootAninmation.addAnimation([ exitFade, exitSlide ]);
      }

      return rootAninmation;
    };
  }

}
