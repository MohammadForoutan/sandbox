module mux4_to_1(
    input [1:0] sel,
    input [3:0] in,
    output reg out
);

always @(*) begin // change execution from parallel to sequential for this block of code. (code run line by line)
    case(sel)
        2'b00: out = in[0]; 
        2'b01: out = in[1];
        2'b10: out = in[2];
        2'b11: out = in[3];
        default: out = 1'b0;
    endcase // for switch case
end // for begin

endmodule // for module
