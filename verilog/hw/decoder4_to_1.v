// 2 to 4 decoder
module decoder2_to_4_active_low(
    input a1,
    input a0,
    input en,
    output [3:0] y
);
 
  assign y  = en ? 4`b1111:
    ({a1,a0}) == 2`b00 ? 4`b1110:
    ({a1,a0}) == 2`b01 ? 4`b1101:
    ({a1,a0}) == 2`b10 ? 4`b1011:
    ({a1,a0}) == 2`b11 ? 4`b0111:
    4`bx;

endmodule
