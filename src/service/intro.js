import anime from 'animejs'

export class Intro {

  constructor() {
    this.spinner = document.getElementById('spinner');
    this.canvasContainer = document.getElementById('canvas');
    this.loader = document.getElementById('loader')
    this.checkUserAgent();
    this.beginLoadIntro();
  }

  checkUserAgent() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
     // TODO use pixi blur if firefox
     this.addSoftwareBlur();
    } else {
      this.addCanvasBlur();
    }
  }

  addCanvasBlur() {
    this.canvasContainer.classList.add('blur');
  }

  addSoftwareBlur() {
    this.firefox = true;
    this.canvasContainer.classList.add('background');
  }

  beginLoadIntro() {
    setTimeout(() => {
      this.spinner.removeAttribute('style');
      setTimeout(() => {
        this.spinner.classList.add('active');
      }, 100);
    }, 400);
  }

  introSequence(callback) {
    this.spinner.classList.remove('active');
    setTimeout(() => {
      this.slideLoader('out', () => {
        // this.loader.classList.add('none');
        this.spinner.classList.add('none');
        if (callback) {
          callback();
        }
      });
    }, 400);
  }

  slideLoader(direction, callback) {

    let tx = direction === 'in' ? '0' : '-100%';

    anime({
      targets: '.loader-bar',
      translateX: tx,
      easing: 'easeInOutExpo',
      duration: 1400,
      delay: function(el, i) {
        return i * 120;
      },
      complete: function() {
        if (callback) {
          callback();
        }
      }
    });

  }


}
