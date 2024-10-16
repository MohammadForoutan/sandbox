`timescale 1ns / 1ps

module not_gate (
    input wire a,      // Input signal a
    output wire out    // Output signal
);

    // Power supply connections
    supply1 vdd;    // VDD (positive supply voltage) = 1
    supply0 gnd;    // GND (ground) = 0

    // PMOS transistor with 6ns delay
    pmos #(6) p1(out, vdd, a);  // pmos(output, power, input)

    // NMOS transistor with 4ns delay
    nmos #(4) n1(out, gnd, a);  // nmos(output, ground, input)

endmodule

// Truth table for PMOS and NMOS transistors in NOT gate:
//
// Input (a) | PMOS (p1) | NMOS (n1) | Output (out)
// ---------|-----------|-----------|-------------
//    0     |    ON     |    OFF    |     1
//    1     |    OFF    |    ON     |     0
//
// When input is 0:
// - PMOS is ON, connecting output to VDD (1)
// - NMOS is OFF, not affecting the output
// Result: Output is pulled up to 1
//
// When input is 1:
// - PMOS is OFF, not affecting the output
// - NMOS is ON, connecting output to GND (0)
// Result: Output is pulled down to 0
