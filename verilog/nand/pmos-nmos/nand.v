module nand_gate (
    input a,
    input b,
    output y
);

    supply1 vdd;
    supply0 gnd;
    wire w1;

    // PMOS transistors in parallel - both transistors are connected to VDD and the output
    pmos p1(w1, vdd, a);
    pmos p2(w1, vdd, b);

    // NMOS transistors in series - both transistors are connected to GND and the output
    nmos n1(w1, w2, a);
    nmos n2(w2, gnd, b);

    // Output - the output is connected to the w1 wire
    assign y = w1;

endmodule

    // NAND gate circuit using PMOS and NMOS transistors:
    //
    //        VDD
    //         |
    //    |----|
    //  |-|  |-|
    //  | |  | |
    //  |p1  |p2
    //  | |  | |
    //  |-|  |-|
    //    |----+---- Output (y)
    //    |    |
    //  |-|    |
    //  | |    |
    //  |n1    |
    //  | |    |
    //  |-|    |
    //    |    |
    //  |-|    |
    //  | |    |
    //  |n2    |
    //  | |    |
    //  |-|    |
    //    |    |
    //   GND   |
    //         |
    //    Input a,b


    // PMOS block:
    //     VDD
    //      |
    //   |--+--|
    //   |     |
    // |-+   |-+
    // |p1   |p2
    // |-|   |-|
    //   |     |
    //   |--+--|
    //      |
    //      |
    //    Output

    // NMOS block:
    //    Input
    //      |
    //    |-+
    //    |n1
    //    |-|
    //      |
    //    |-+
    //    |n2
    //    |-|
    //      |
    //     GND
