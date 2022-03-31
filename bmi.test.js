const {bmi} = require('./bmicalc');
// test.each([[20,1,"Normal"]])(
//     '%i height * %i  / %i weigh', (weight,height, expected) => {
//         expect(bmi(weight,height)).toBe(expected);
//     },
// );
// test.each([[66,5,"Underweight"]])(
//     '%i height * %i  / %i weigh', (weight,height, expected) => {
//         expect(bmi(weight,height)).toBe(expected);
//     },
// );

// test.each([[70,4,"Obese"]])(
//     '%i height * %i  / %i weigh', (weight,height, expected) => {
//         expect(bmi(weight,height)).toBe(expected);
//     },
// );

test('67,1.65', ()=>{
    expect(bmi(67,1.65)).toBe("Normal");
});
test('45,1.80', ()=>{
    expect(bmi(45,1.80)).toBe("Underweight");
});
test('67,1.40', ()=>{
    expect(bmi(67,1.40)).toBe("Obese");
});
test('67,1.50', ()=>{
    expect(bmi(67,1.50)).toBe("Overweight");
});










