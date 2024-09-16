namespace Blazor.Ionic.Components.Events;

public class RouteEventDetail
{
    public string? From { get; set; }
    public string? RedirectedFrom { get; set; }
    public string To { get; set; } = default!;
}