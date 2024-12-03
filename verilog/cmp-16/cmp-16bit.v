module comparator_16bit (
    input [15:0] A,        // First 16-bit input
    input [15:0] B,        // Second 16-bit input
    output greater_than,   // Output: A > B
    output less_than,      // Output: A < B
    output equal           // Output: A == B
);

    assign greater_than = (A > B); // A greater than B
    assign less_than = (A < B);    // A less than B
    assign equal = (A == B);       // A equal to B

endmodule
