source-link:

- https://medium.com/@0xYori/installing-icarus-verilog-and-gtkwave-on-ubuntu-for-verilog-simulation-d6d31eee2096

1. compile

   ```
   iverilog -o out/not-gate-snot-gate.v not-gate.tb.v
   ```

2. run

   ```
   ./out/not-gate-s
   ```

   or

   ```
   # also generate vcd file
   vvp out/not-gate-s
   ```

3. view

   ```
   # generated vcd fil gtkwave file
   gtkwave out/not-gate.vcd
   ```
