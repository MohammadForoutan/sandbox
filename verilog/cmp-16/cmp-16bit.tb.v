`timescale 1ns / 1ps

module tb_comparator_16bit;

    // Testbench inputs and outputs
    reg [15:0] A;
    reg [15:0] B;
    wire greater_than;
    wire less_than;
    wire equal;

    // Instantiate the comparator module
    comparator_16bit uut (
        .A(A),
        .B(B),
        .greater_than(greater_than),
        .less_than(less_than),
        .equal(equal)
    );

    initial begin
        $dumpfile("cmp-16bit.vcd");  // generate vcd for gui
        $dumpvars(0, tb_comparator_16bit);     
        // Test cases
        $monitor("Time=%0d A=%h B=%h | GT=%b LT=%b EQ=%b", $time, A, B, greater_than, less_than, equal);

        // Case 1: A = 16'h0001, B = 16'h0002 (A < B)
        A = 16'h0001; B = 16'h0002;
        #10;

        // Case 2: A = 16'hFFFF, B = 16'hFFFE (A > B)
        A = 16'hFFFF; B = 16'hFFFE;
        #10;

        // Case 3: A = 16'h1234, B = 16'h1234 (A == B)
        A = 16'h1234; B = 16'h1234;
        #10;

        // Case 4: A = 16'h0000, B = 16'h0000 (A == B)
        A = 16'h0000; B = 16'h0000;
        #10;

        // Case 5: A = 16'hABCD, B = 16'h1234 (A > B)
        A = 16'hABCD; B = 16'h1234;
        #10;

        // Finish simulation
        $finish;
    end

endmodule
