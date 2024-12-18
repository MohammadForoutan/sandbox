module mux_4_to_1(
    out,
    i0,i1,i2,i3,
    s0,s1
);
    output out;
    input i0,i1,i2,i3;
    input s0,s1;

    // s0 s1 -> out
    // 00 -> i0
    // 01 -> i1
    // 10 -> i2
    // 11 -> i3
    assign out = s0 ? (s1 ? i3 : i2) : (s1 ? i1 : i0);

endmodule