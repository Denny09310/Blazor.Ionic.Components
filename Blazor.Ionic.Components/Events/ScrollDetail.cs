namespace Blazor.Ionic.Components.Events;

public class ScrollDetail : IScrollDetail
{
    public double CurrentX { get; set; }
    public double CurrentY { get; set; }
    public object? Data { get; set; }
    public double DeltaX { get; set; }
    public double DeltaY { get; set; }
    public bool IsScrolling { get; set; }
    public double ScrollLeft { get; set; }
    public double ScrollTop { get; set; }
    public long StartTimeStamp { get; set; }
    public double StartX { get; set; }
    public double StartY { get; set; }
    public long TimeStamp { get; set; }
    public string Type { get; set; } = default!;
    public double VelocityX { get; set; }
    public double VelocityY { get; set; }
}