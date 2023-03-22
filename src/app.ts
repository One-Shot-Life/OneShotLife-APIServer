import express from "express";
import mysql from "mysql2/promise";
import ejs from "ejs";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config();

const connectMySql = async () => {
  try {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

    if (
      !DB_HOST ||
      !DB_USER ||
      !DB_PASSWORD ||
      !DB_PORT ||
      typeof Number(DB_PORT) !== "number"
    ) {
      throw new Error("env 파일을 읽지 못했습니다.");
    }

    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: Number(DB_PORT),
      // database: "test",
    });

    return connection;
  } catch (err) {
    console.log(err);
  }
};

connectMySql();

export const app = express();

app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
app.use(express.static("apidocs"));

//
/**
 * @api {get} /api/test GetOneShotLife
 * @apiName GetOneShotLife
 * @apiGroup Test
 *
 * @apiSuccess {String} msg 인생은 한방 메시지를 응답해요.
 *
 * @apiParam {Null} none "아무것도 보내지 않아도 되요."
 *
 * @apiBody {Null} none "아무것도 보내지 않아도 되요."
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "인생은 한방!"
 *     }
 *
 * @apiError NotFound 알수없는 요청
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "한방에 가는것도 인생"
 *     }
 */
app.get("/api/test", (req, res) => {
  res.status(200).json({ msg: "인생은 한방!" }).send();
});

app.get("/", (req, res) => {
  // res.send(`
  //   <script>
  //     var id = "tester";
  //     var pass = "qwe123";

  //     var getId = prompt("아이디를 입력하세요.");
  //     var getpass = prompt("비밀번호를 입력하세요.");

  //     if ()
  //   </script>
  // `);

  const apidocPath = path.resolve("./", "apidoc");
  res.render(`${apidocPath}/index.html`);
});

app.listen(4000, () => {
  console.log("One Shot Life !");
});
