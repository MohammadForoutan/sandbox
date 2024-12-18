module latch_d_type (
    input wire d,      // Data input
    input wire en,     // Enable signal
    output reg q       // Output
);

// D-type latch behavior
always @(d or en) begin
    if (en)
        q <= d;    // When enabled, output follows input
    // When disabled, output holds its value
end

endmodule
