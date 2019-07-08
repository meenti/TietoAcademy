using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MyApplication;


namespace toFahrenheit
{
    [TestClass]
    public class toFahrenheit
    {
        [TestMethod]
        public void TestMethod1()
        {
            WeatherForecast temp = new WeatherForecast
            {
                TemperatureC = 20
            };
            int expected = 68;
            temp.TemperatureF = 32 + (int)(temp.TemperatureC / 0.5556);
            Assert.AreEqual(expected, temp.TemperatureF);
        }
    }
}
