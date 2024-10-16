module xor_gate (
    input wire a,      // Input signal a
    input wire b,      // Input signal b
    output wire out    // Output signal
);

    // XOR gate logic
    assign out = a ^ b;

endmodule
