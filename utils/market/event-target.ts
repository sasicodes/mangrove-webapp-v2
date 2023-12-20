export class MangroveEventTarget<
  TEvents extends string = string,
  TEventData extends Record<TEvents, unknown> = Record<TEvents, unknown>
> extends EventTarget {
  on<TType extends TEvents>(
    type: TType,
    callback: ((data: TEventData[TType]) => void),
    options?: boolean | AddEventListenerOptions | undefined
  ): () => void {
    const listener = (evt: Event) => {
      if (evt instanceof CustomEvent && evt.type === type) {
        callback(evt.detail);
      }
    }
    this.addEventListener(type, listener, options);
    return () => this.removeEventListener(type, listener, options);
  }
}