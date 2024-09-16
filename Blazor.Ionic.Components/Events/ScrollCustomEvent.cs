using Microsoft.JSInterop;

namespace Blazor.Ionic.Components.Events;

public class ScrollCustomEvent : JSEvent, IScrollBaseCustomEvent
{
    public ScrollDetail Detail { get; set; } = default!;

    IScrollBaseDetail IScrollBaseCustomEvent.Detail
    {
        get => Detail;
        set => Detail = (ScrollDetail)value;
    }
}
