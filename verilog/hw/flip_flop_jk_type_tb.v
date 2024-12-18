`timescale 1ns/1ns

module flip_flop_jk_type_tb();

reg j, k, clk, rst;
wire q, qbar;

// Instantiate the JK flip-flop
flip_flop_jk_type jk_ff(
    .j(j),
    .k(k), 
    .clk(clk),
    .rst(rst),
    .q(q),
    .qbar(qbar)
);

// Clock generation
initial begin
    clk = 0;
    forever #5 clk = ~clk;
end

// Test stimulus
initial begin
    // Initialize inputs
    j = 0;
    k = 0;
    rst = 1;
    
    // Reset test
    #10 rst = 0;
    #10 rst = 1;
    
    // Test all JK combinations
    // Hold (J=0, K=0)
    #10 j = 0; k = 0;
    
    // Set (J=1, K=0)
    #10 j = 1; k = 0;
    
    // Reset (J=0, K=1)
    #10 j = 0; k = 1;
    
    // Toggle (J=1, K=1)
    #10 j = 1; k = 1;
    #10 j = 1; k = 1;
    
    // Additional test cases
    #10 j = 0; k = 0;
    #10 j = 1; k = 0;
    
    // End simulation
    #10 $finish;
end

// Monitor changes
initial begin
    $monitor("Time=%0t rst=%b j=%b k=%b q=%b qbar=%b", 
             $time, rst, j, k, q, qbar);
end

endmodule
