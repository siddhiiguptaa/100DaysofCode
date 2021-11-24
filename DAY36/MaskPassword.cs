public string MaskStringCreate()
{
    string myAwesomePassword = "Password12345!"; //Pas*********

    return string.Create(myAwesomePassword.Length, myAwesomePassword, (span, value) =>
    {
        value.AsSpan().CopyTo(span);
        span[3..].Fill('*');
    });
}
