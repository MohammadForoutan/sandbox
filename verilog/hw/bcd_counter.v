
module bcd_counter(
    input wire clk,    // Clock signal
    input wire rst,    // Reset signal
    input wire en,     // Enable signal
    output reg [3:0] count // 4-bit BCD output
);

    always @(posedge clk) begin
        if (rst)
            count <= 4'b0000; // Reset count to 0
        else if (count == 4'b1001)
            count <= 4'b0000; // Reset to 0 when count reaches 9
        else if (en) // If enable is high, increment count
            count <= count + 1; // Increment count
    end

endmodule
