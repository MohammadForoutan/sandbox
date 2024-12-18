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
        if (s0 == 0 && s1 == 0)
            out = i0;
        else if (s0 == 0 && s1 == 1)
            out = i1;
        else if (s0 == 1 && s1 == 0)
            out = i2;
        else // s0 == 1 && s1 == 1
            out = i3;
    end

endmodule