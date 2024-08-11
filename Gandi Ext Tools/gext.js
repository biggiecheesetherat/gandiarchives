/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// Name: Stretch
// ID: stretch
// Description: Stretch sprites horizontally or vertically.
// Original Author: GarboMuffin <https://github.com/GarboMuffin>, Star World <https://github.com/TheStarWorld>
// Code ported from: https://github.com/TurboWarp/extensions/blob/master/extensions/stretch.js
// Cover from: https://github.com/TurboWarp/extensions/blob/master/images/stretch.svg
// Cover License: GPLv3
// Porter: Arkos

(function (Scratch) {
  const extensionId = 'extTools';
  const STRETCH_X = Symbol('stretch.x');
  const STRETCH_Y = Symbol('stretch.y');

  const cover = "data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='600' height='300' viewBox='0,0,600,300'%3E%3Cdefs%3E%3CradialGradient cx='242.26075' cy='206.90975' r='300' gradientUnits='userSpaceOnUse' id='color-1'%3E%3Cstop offset='0' stop-color='%23b0ffff'/%3E%3Cstop offset='1' stop-color='%2366adff'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(42.8,-84.723)'%3E%3Cg stroke-miterlimit='10'%3E%3Cpath d='M-42.8,384.723v-300h600v300z' fill='url(%23color-1)' stroke='none' stroke-width='1'/%3E%3Cpath d='M275.14435,191.29004c0,0 -5.00144,-16.70516 -12.76342,-24.07743c-6.67597,-6.34078 -15.82194,-3.42411 -20.63155,-4.27644c-2.11668,-0.37511 -16.98535,1.49937 -23.44141,9.98587c-2.65984,3.49636 -16.05735,76.17426 0.24808,101.60699c6.88893,10.74514 27.94711,12.66018 41.38774,1.96294c13.66949,-10.87939 19.65743,-34.46541 18.66157,-34.25132c-2.49852,0.53713 -26.37708,7.98564 -36.7193,0.53938c-5.11881,-3.68547 -4.43882,-22.19236 -1.10069,-24.98104c7.522,-6.28387 69.66207,-6.79969 69.83345,2.27738c0.08603,4.5563 0.04158,53.49332 -7.71216,67.66735c-8.87325,16.22052 -24.98436,27.20049 -28.46937,27.68586c-11.1633,1.55476 -38.98905,5.73317 -59.99008,-2.02062c-21.17919,-7.81957 -35.4874,-27.57855 -35.4874,-27.57855c0,0 -6.58783,-27.94469 -6.30629,-58.3735c0.30577,-33.04784 7.68106,-69.02582 13.11204,-75.31706c11.12895,-12.89175 32.44333,-21.57632 39.02629,-22.79334c8.84528,-1.63526 34.83865,-6.21911 53.14372,2.92461c18.96086,9.4713 30.09238,29.42369 30.09238,29.42369l4.11045,29.59525z' fill='%23ffffff' stroke-opacity='0.15686' stroke='%23000000' stroke-width='13.5'/%3E%3Cpath d='M259.86779,260.80119c0.09289,-1.05673 0.80292,-1.96451 1.81735,-2.32649c1.01696,-0.3642 2.15533,-0.11629 2.92038,0.6324l15.65323,15.34272l17.35295,-5.38582l5.49447,-17.00959l-15.65348,-15.34396c-0.76606,-0.75017 -1.01595,-1.86629 -0.64693,-2.86141c0.37281,-0.9971 1.29663,-1.6916 2.37695,-1.78315c9.50653,-0.80288 18.82123,2.52417 25.55579,9.12656c9.22358,9.04194 11.66616,22.24573 7.34085,33.50034c0.47277,0.39043 0.93922,0.80411 1.39936,1.25021l52.25121,48.32992c0.01843,0.01756 0.0366,0.03686 0.05654,0.05418c6.14493,6.02367 6.14493,15.8247 0,21.84936c-6.14594,6.02318 -16.07148,5.94994 -22.21539,-0.07373c-0.02651,-0.02424 -0.05073,-0.0485 -0.07496,-0.07546l-48.87471,-51.61689c-0.44551,-0.43868 -0.8592,-0.89764 -1.24918,-1.36872c-11.48467,4.24745 -24.96338,1.85886 -34.19503,-7.18902c-6.73305,-6.60288 -10.12948,-15.73414 -9.3094,-25.05146zM361.44503,339.66935c2.26437,2.2191 5.93164,2.21762 8.19576,0c2.26336,-2.21712 2.26336,-5.81486 0,-8.03272c-2.26412,-2.21762 -5.93139,-2.21762 -8.19576,0c-2.26336,2.21787 -2.26336,5.8156 0,8.03272z' fill='%23ffffff' stroke-opacity='0.15686' stroke='%23000000' stroke-width='13.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  const icon = "data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='161.95174' height='163.59592' viewBox='0,0,161.95174,163.59592'%3E%3Cg transform='translate(-167.45055,-144.43091)'%3E%3Cg stroke='none' stroke-width='0' stroke-miterlimit='10'%3E%3Cpath d='M329.40229,226.22887c0,45.17577 -36.25413,81.79796 -80.97587,81.79796c-44.72174,0 -80.97587,-36.62219 -80.97587,-81.79796c0,-45.17577 36.25413,-81.79796 80.97587,-81.79796c44.72174,0 80.97587,36.62219 80.97587,81.79796z' fill='%2300b5ff'/%3E%3Cpath d='M187.52387,191.74563c0.09289,-1.05673 0.80292,-1.96451 1.81735,-2.32649c1.01696,-0.3642 2.15533,-0.11629 2.92038,0.6324l15.65323,15.34272l17.35295,-5.38582l5.49447,-17.00959l-15.65348,-15.34396c-0.76606,-0.75017 -1.01595,-1.86629 -0.64693,-2.86141c0.37281,-0.9971 1.29663,-1.6916 2.37695,-1.78315c9.50653,-0.80288 18.82123,2.52417 25.55579,9.12656c9.22358,9.04194 11.66616,22.24573 7.34085,33.50034c0.47277,0.39043 0.93922,0.80411 1.39936,1.25021l52.25121,48.32992c0.01843,0.01756 0.0366,0.03686 0.05654,0.05418c6.14493,6.02367 6.14493,15.8247 0,21.84936c-6.14594,6.02318 -16.07148,5.94994 -22.21539,-0.07373c-0.02651,-0.02424 -0.05073,-0.0485 -0.07496,-0.07546l-48.87471,-51.61689c-0.44551,-0.43868 -0.8592,-0.89764 -1.24918,-1.36872c-11.48467,4.24745 -24.96338,1.85886 -34.19503,-7.18902c-6.73305,-6.60288 -10.12948,-15.73414 -9.3094,-25.05146zM289.1011,270.61379c2.26437,2.2191 5.93164,2.21762 8.19576,0c2.26336,-2.21712 2.26336,-5.81486 0,-8.03272c-2.26412,-2.21762 -5.93139,-2.21762 -8.19576,0c-2.26336,2.21787 -2.26336,5.8156 0,8.03272z' fill='%23ffffff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  let runtime;
  let initialized = false;

  const initExt = function (rt) {
    if (initialized) return;
    initialized = true;
    runtime = rt;

    /**
     * @param {VM.RenderedTarget} target
     * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
     */
    const implementStretchForTarget = (target, originalTarget) => {
      if (STRETCH_X in target) {
        // Target already has stretch. Don't implement again.
        return;
      }
      target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
      target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

      const orig = target._getRenderedDirectionAndScale;
      target._getRenderedDirectionAndScale = function () {
        const result = orig.call(this);
        result.scale[0] *= this[STRETCH_X] / 100;
        result.scale[1] *= this[STRETCH_Y] / 100;
        return result;
      };
    };
    runtime.targets.forEach((target) => implementStretchForTarget(target));
    runtime.addListener('targetWasCreated', implementStretchForTarget);
    runtime.on('PROJECT_LOADED', () => {
      runtime.targets.forEach((target) => implementStretchForTarget(target));
    });
  };

  /**
   * @param {VM.RenderedTarget} target
   */
  const forceUpdateDirectionAndScale = (target) => {
    target.setDirection(target.direction);
  };

  class GandiExt {
    constructor() {
      initExt(Scratch.runtime);
      this.initFormatMessage({
        name: ['Gandi 扩展工具', 'Gandi Extension Tools'],
        credit: ['✨ 简单的包装扩展工具！', '✨ Easy extension tools for Packaging!'],
        // docsURI: [
        //   'https://learn.ccw.site/article/',
        //   'https://getgandi.com/extensions/',
        // ],

        extUri: ['从扩展获取数据 uri： [Y]', 'get data uri from extension: [Y]']

      });
    }

    initFormatMessage(l10n) {
      const res = { 'zh-cn': {}, en: {} };
      Object.entries(l10n).forEach(([id, msgs]) => {
        const ID = `${extensionId}.${id}`;
        [res['zh-cn'][ID], res.en[ID]] = msgs;
      });
      const _formatMessage = runtime.getFormatMessage(res);
      this.fm = (id) => {
        const ID = `${extensionId}.${id}`;
        return _formatMessage({
          ID,
          default: ID,
          description: ID,
        });
      };
    }

    getInfo() {
      return {
        id: extensionId,
        name: this.fm('name'),
        color1: '#4287f5',
        color2: '#2b62ba',
        color3: '#204785',
        menuIconURI: icon,
        blocks: [
          `---${this.fm('credit')}`,
          {
            opcode: 'extUri',
            blockType: Scratch.BlockType.REPORTER,
            text: this.fm('setStretch'),
            arguments: {
              Y: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 100,
              },
            }
          },
        ],
      };
    }

    extUri(args, util) {
      const x = Scratch.Cast.toNumber(args.X);
      const y = Scratch.Cast.toNumber(args.Y);
      if (util.target[STRETCH_X] !== x || util.target[STRETCH_Y] !== y) {
        util.target[STRETCH_X] = x;
        util.target[STRETCH_Y] = y;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    changeStretch(args, util) {
      const dx = Scratch.Cast.toNumber(args.DX);
      const dy = Scratch.Cast.toNumber(args.DY);
      if (dx !== 0 || dy !== 0) {
        util.target[STRETCH_X] += dx;
        util.target[STRETCH_Y] += dy;
        forceUpdateDirectionAndScale(util.target);
      }
    }

  // Scratch.extensions.register(new Stretch());
  window.tempExt = {
    Extension: GandiExt,
    info: {
      name: `${extensionId}.extensionName`,
      description: `${extensionId}.description`,
      extensionId,
      iconURL: cover,
      insetIconURL: icon,
      featured: false,
      disabled: false,
      // docsURI: 'https://learn.ccw.site/article/?',
      collaborator: 'Themeatly2',
      collaboratorList: [
        {
          collaborator: 'Themeatly2',
          collaboratorURL:
          'https://guns.lol/themeatly2',
        },
      ],
    },
    // ['Gandi 扩展工具', 'Gandi Extension Tools']
    l10n: {
      'zh-cn': {
        [`${extensionId}.extensionName`]: 'Gandi 扩展工具',
        [`${extensionId}.description`]: '✨ 简单的包装扩展工具！',
      },
      en: {
        [`${extensionId}.extensionName`]: 'Gandi Extension Tools',
        [`${extensionId}.description`]: '✨ Easy extension tools for Packaging!',
      },
    },
  };
}(window.Scratch));
