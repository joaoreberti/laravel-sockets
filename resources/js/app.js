require("./bootstrap");

console.log({ Echo });
Echo.channel("task").listen(".cenas", (e) => {
    console.log(e);
});
