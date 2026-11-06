import { Icon } from '../Icon';
import type { Block } from './content';

/** Convierte los bloques de una guía en HTML. Los tipos están documentados en content.ts. */
export function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="prose article-body">
      {body.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>;
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ol>
            );
          case 'steps':
            return (
              <ol key={i} className="article-steps">
                {b.items.map((it) => (
                  <li key={it.title}>
                    <strong>{it.title}</strong>
                    <span>{it.text}</span>
                  </li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <aside key={i} className="article-note">
                <Icon name="check" strokeWidth={2.2} />
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.text}</p>
                </div>
              </aside>
            );
          case 'table':
            return (
              <div key={i} className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row) => (
                      <tr key={row.join('|')}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row">
                              {cell}
                            </th>
                          ) : (
                            <td key={c}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return <p key={i}>{b.text}</p>;
        }
      })}
    </div>
  );
}
