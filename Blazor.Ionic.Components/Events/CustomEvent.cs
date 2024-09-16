using Microsoft.JSInterop;

namespace Blazor.Ionic.Components.Events;

public class CustomEvent<TDetail> : JSEvent
{
    public TDetail Detail { get; set; } = default!;
}
