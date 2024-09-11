namespace Blazor.Ionic.Components.Events;

public interface IGestureDetail
{
    double CurrentX { get; set; }
    double CurrentY { get; set; }
    object? Data { get; set; }
    double DeltaX { get; set; }
    double DeltaY { get; set; }
    long StartTimeStamp { get; set; }
    double StartX { get; set; }
    double StartY { get; set; }
    long TimeStamp { get; set; }
    string Type { get; set; }
    double VelocityX { get; set; }
    double VelocityY { get; set; }
}
