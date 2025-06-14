declare namespace UI {
  type onUI = <T extends keyof UIEvents>(evtName: T, callback: (...args: Parameters<UIEvents[T]>) => void) => void;
  type onUICall = <T extends keyof UIRPC>(
    evtName: T,
    callback: (...args: Parameters<UIRPC[T]>) => Promise<ReturnType<UIRPC[T]>> | ReturnType<UIRPC[T]>,
  ) => void;
  type emitUI = <T extends keyof UIEvents>(evtName: T, ...args: Parameters<UIEvents[T]>) => void;
  type onSocket = <T extends keyof ClientForwardEvents>(
    evtName: T,
    ...args: Parameters<ClientForwardEvents[T]>
  ) => void;
  type emitSocket = <T extends keyof SocketForwardEvents>(
    evtName: T,
    ...args: Parameters<SocketForwardEvents[T]>
  ) => void;
  type awaitUI = <T extends keyof UIRPC>(evtName: T, ...args: Parameters<UIRPC[T]>) => Promise<ReturnType<UIRPC[T]>>;
  type focusUI = (hasFocus: boolean, hasCursor: boolean) => void;

  type onClient = onUI;
  type onClientCall = onUICall;
  type emitClient = emitUI;
  type awaitClient = awaitUI;
}

declare interface ClientForwardEvents {}

declare interface SocketForwardEvents {
  ['character-select.choose']: (characterId: number, steam: Game.playerSteamId) => void;
}

declare interface UISocketEvents {
  ['__client__']: UI.onSocket;
}

declare interface UIEvents {
  ['socket.connected']: () => void;
  ['__socket__']: UI.emitSocket;
  ['nui.close']: () => void;
  ['nui.restart']: () => void;
  ['hud.state']: (event: UI.HUD.Event) => void;
  ['form.state']: (event: UI.Form.Event) => void;
  ['form.answer']: (event: UI.Form.Event) => void;
  ['notification.notify']: (
    text: string,
    duration?: number,
    bgColor?: keyof UI.Theme['colors'],
    fgColor?: keyof UI.Theme['colors'],
    centered?: boolean,
  ) => void;
  ['interact.pois']: (pois: UI.Interact.POI[]) => void;
  ['interact.active']: (active: string | null) => void;
  ['chat.state']: (event: UI.Chat.Event) => void;
  ['threejs.state']: (event: UI.ThreeJS.Event) => void;
  ['animations.state']: (event: UI.Animations.Event) => void;
  ['animations.play-anim']: (event: UI.Animations.Play) => void;
  ['animations.stop-anim']: (event: UI.Animations.Stop) => void;

  ['target.action']: (context: number | string, action: Target.Item) => void;

  // TODO: Move to proper resource ?
  ['character-select.state']: (state: UI.CharacterSelect.Event) => void;
  ['character-select.create']: () => void;
  ['character-select.choose']: (characterId: number) => void;
  ['customization.state']: (event: UI.Customization.Event) => void;
  ['customization.set-components']: (components: number[]) => void;
  ['customization.highlight']: (gender: 'male' | 'female') => void;
  ['customization.choose-gender']: () => void;
  ['customization.set-state']: (state: Customization.State) => void;
  ['customization.set-skin-tone']: (skinTone: number) => void;
  ['customization.set-head']: (head: number) => void;
  ['customization.set-teeth']: (head: number) => void;
  ['customization.set-body-type']: (bodyType: number) => void;
  ['customization.set-waist']: (waist: number) => void;
  ['customization.set-face-feature']: (feature: number, value: number) => void;
  ['customization.set-face-option']: (faceOptions: Record<string, number>) => void;
  ['customization.rotate-chosen']: (rotation: number) => void;

  ['customization.set-tint-by-category']: (category: string, tint: Customization.Palette) => void;
  ['customization.remove-tint-by-category']: (category: string) => void;

  ['log.state']: (event: UI.Log.Event) => void;
  ['log.message']: (data: UI.Log.Data, overrideSource?: 'client' | 'server') => void;
}
