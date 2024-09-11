using Microsoft.JSInterop;

namespace Blazor.Ionic.Components.Events;

public class ScrollCustomEvent : DotNetEventListener, IScrollBaseCustomEvent
{
    public ScrollDetail Detail { get; set; } = default!;

    IScrollBaseDetail IScrollBaseCustomEvent.Detail
    {
        get => Detail;
        set => Detail = (ScrollDetail)value;
    }
}
