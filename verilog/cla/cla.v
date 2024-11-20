module cla_4bit (
    input [3:0] A,      // 4-bit input A
    input [3:0] B,      // 4-bit input B
    input Cin,          // Carry input
    output [3:0] Sum,   // 4-bit Sum output
    output Cout         // Carry output
);

    // Generate and propagate signals
    wire [3:0] P; // Propagate
    wire [3:0] G; // Generate
    wire [4:0] C; // Carry signals

    // Calculate propagate and generate signals
    assign P = A ^ B; // Propagate: P[i] = A[i] XOR B[i]
    assign G = A & B; // Generate: G[i] = A[i] AND B[i]

    // Carry lookahead logic
    assign C[0] = Cin; // Initial carry input
    assign C[1] = G[0] | (P[0] & C[0]); // C1
    assign C[2] = G[1] | (P[1] & C[1]); // C2
    assign C[3] = G[2] | (P[2] & C[2]); // C3
    assign C[4] = G[3] | (P[3] & C[3]); // C4 (final carry out)

    // Sum calculation
    assign Sum = P ^ {C[3:0]}; // Sum: Sum[i] = P[i] XOR C[i]

    // Final carry out
    assign Cout = C[4];

endmodule
