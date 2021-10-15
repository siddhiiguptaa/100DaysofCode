using System;

namespace console
{
    public static class Challenges
    {
        public static int[] PushZerosToEnd2(int[] arr)
        {
            int n = arr.Length;
            for (int i = 0; i < n; i++)
            {
                if (arr[i] == 0)
                {
                    for (int j = i + 1; j < n; j++)
                    {
                        if (arr[j] != 0)
                        {
                            arr[i] = arr[j];
                            arr[j] = 0;
                            break;
                        }
                    }
                }
            }

            return arr;
        }

        public static int[] PushZerosToEnd(int[] arr)
        {
            int n = arr.Length;

            int count = 0;

            for (int i = 0; i < n; i++)
                if (arr[i] != 0)

                    arr[count++] = arr[i];

            while (count < n)
                arr[count++] = 0;

            return arr;
        }

        public static void PrintArr(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
            Console.WriteLine("\nFinished\n");
        }
    }
}


/* 
I run dotnet benchmark and get those results:

// * Summary *

BenchmarkDotNet=v0.13.1, OS=Windows 10.0.18363.1801 (1909/November2019Update/19H2)
Intel Core i7-8650U CPU 1.90GHz (Kaby Lake R), 1 CPU, 8 logical and 4 physical cores
.NET SDK=5.0.400
  [Host]     : .NET Core 3.1.18 (CoreCLR 4.700.21.35901, CoreFX 4.700.21.36305), X64 RyuJIT  [AttachedDebugger]
  DefaultJob : .NET Core 3.1.18 (CoreCLR 4.700.21.35901, CoreFX 4.700.21.36305), X64 RyuJIT


| Method |     Mean |    Error |    StdDev |   Median | Rank |  Gen 0 | Allocated |
|------- |---------:|---------:|----------:|---------:|-----:|-------:|----------:|
|     T1 | 80.35 ns | 3.167 ns |  9.338 ns | 81.87 ns |    2 | 0.0172 |      72 B |  --> PushZerosToEnd
|     T2 | 53.12 ns | 4.743 ns | 13.762 ns | 49.44 ns |    1 | 0.0172 |      72 B |  --> PushZerosToEnd2

// * Warnings *
Environment
  Summary -> Benchmark was executed with attached debugger
MultimodalDistribution
  MemoryBenchmark1.T1: Default -> It seems that the distribution can have several modes (mValue = 2.96)
  MemoryBenchmark1.T2: Default -> It seems that the distribution can have several modes (mValue = 2.93)

// * Hints *
Outliers
  MemoryBenchmark1.T1: Default -> 2 outliers were detected (59.82 ns, 62.18 ns)
  MemoryBenchmark1.T2: Default -> 3 outliers were removed (95.75 ns..100.07 ns)

// * Legends *
  Mean      : Arithmetic mean of all measurements
  Error     : Half of 99.9% confidence interval
  StdDev    : Standard deviation of all measurements
  Median    : Value separating the higher half of all measurements (50th percentile)
  Rank      : Relative position of current benchmark mean among all benchmarks (Arabic style)
  Gen 0     : GC Generation 0 collects per 1000 operations
  Allocated : Allocated memory per single operation (managed only, inclusive, 1KB = 1024B)
  1 ns      : 1 Nanosecond (0.000000001 sec)

// * Diagnostic Output - MemoryDiagnoser *


// ***** BenchmarkRunner: End *****
// ** Remained 0 benchmark(s) to run **
Run time: 00:02:41 (161.97 sec), executed benchmarks: 2

Global total time: 00:03:12 (192.63 sec), executed benchmarks: 2
*/





