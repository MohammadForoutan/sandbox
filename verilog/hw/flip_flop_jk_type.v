module jk_ff(
    input j,          // J input
    input k,          // K input
    input clk,        // Clock input
    input rst,        // Reset input
    output reg q      // Output Q
);

    // JK Flip-flop behavior
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            q <= 1'b0;  // Reset condition
        end else begin
            case ({j,k})
                2'b00: q <= q;      // No change
                2'b01: q <= 1'b0;   // Reset
                2'b10: q <= 1'b1;   // Set
                2'b11: q <= ~q;     // Toggle
            endcase
        end
    end

endmodule
