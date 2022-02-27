let sum1 = 0;
for (let i = 2; i < process.argv.length;i++)
{
    sum1 += (Number(process.argv[i]));
}
console.log(sum1);