module nor_gate (
    input a,
    input b,
    output y
);

    supply1 vdd;
    supply0 gnd;
    wire w1;

    // PMOS transistors in series - both transistors are connected to VDD and the output
    pmos p1(w1, vdd, a);
    pmos p2(y, w1, b);

    // NMOS transistors in parallel - both transistors are connected to GND and the output
    nmos n1(y, gnd, a);
    nmos n2(y, gnd, b);

endmodule

    // NOR gate circuit using PMOS and NMOS transistors:
    //
    //        VDD
    //         |
    //       |-|
    //       |p1
    //       |-|
    //         |
    //       |-|
    //       |p2
    //       |-|
    //         |
    //    |----|---- Output (y)
    //    |    |
    //  |-|  |-|
    //  |n1  |n2
    //  |-|  |-|
    //    |    |
    //   GND  GND
    //
    //    Input a,b

    // PMOS block (in series):
    //     VDD
    //      |
    //    |-+
    //    |p1
    //    |-|
    //      |
    //    |-+
    //    |p2
    //    |-|
    //      |
    //    Output

    // NMOS block (in parallel):
    //    Input
    //      |
    //   |--+--|
    //   |     |
    // |-+   |-+
    // |n1   |n2
    // |-|   |-|
    //   |     |
    //  GND   GND
