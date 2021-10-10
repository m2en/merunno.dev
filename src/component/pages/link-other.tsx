import CSS from '../../../styles/index.module.css'
import LoCss from '../../../styles/link.module.css'

export default function linkOther() {
  return (
    <main>
      <div className={CSS.Bodys}>
        <div className={LoCss.cotent}>連絡</div>
        <div className={LoCss.link}>
          <p>連絡はこちらまでよろしくお願いします。</p>
          <p>(Discord DMなどはフレンド以外切ってます。)</p>
          <u>me@merunno.dev</u>
        </div>
        <div className={LoCss.cotent}>ソースコード等</div>
        <div className={LoCss.link}>
          <a
            href="https://github.com/merunno/merunno.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>リポジトリ(merunno/merunno.dev)</u>
          </a>
        </div>
        <div className={LoCss.cotent}>リンク集</div>
        <div className={LoCss.link}>
          <a
            href="https://github.com/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>GitHub</u>
          </a>
          ・
          <a
            href="https://twitter.com/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Twitter</u>
          </a>
          ・
          <a
            href="https://twitter.com/_meru92_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Twitter(鍵)</u>
          </a>
          ・
          <a
            href="https://keybase.io/merunno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>KeyBase</u>
          </a>
        </div>
        <div className={LoCss.cotent}>このポートフォリオについて</div>
        <div className={LoCss.link}>
          <p>このポートフォリオは</p>
          <a
            href="https://github.com/merunno/merunno.dev/blob/master/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Apache License 2.0のもと</u>公開を行っています。
          </a>
          <p>© merunno 2021</p>
        </div>
      </div>
    </main>
  )
}
