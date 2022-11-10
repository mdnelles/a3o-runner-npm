export const hook = async (req: any, res: any): Promise<any> => {
    res.json({ status: 201, err: false, msg: "basic api" });
    console.log(" >>>> basic");
 };