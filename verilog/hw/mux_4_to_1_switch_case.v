module mux_4_to_1(
    out,
    i0,i1,i2,i3,
    s0,s1
);
    output reg out;
    input i0,i1,i2,i3;
    input s0,s1;

    // s0 s1 -> out
    // 00 -> i0
    // 01 -> i1
    // 10 -> i2
    // 11 -> i3
    always @(*) begin
        case({s0,s1})
            2'b00: out = i0;
            2'b01: out = i1;
            2'b10: out = i2;
            2'b11: out = i3;
        endcase
    end

endmodule