module decoder2to4 (
    input [1:0] A,  // 2-bit input
    output reg [3:0] Y  // 4-bit output
);

always @(*) begin
    // Set all outputs to 1 (active low)
    Y = 4'b1111; 

    // Use if statements to activate the appropriate output
    if (A == 2'b00) Y[0] = 0;  // Activate output 0
    else if (A == 2'b01) Y[1] = 0;  // Activate output 1
    else if (A == 2'b10) Y[2] = 0;  // Activate output 2
    else if (A == 2'b11) Y[3] = 0;  // Activate output 3
end

endmodule
