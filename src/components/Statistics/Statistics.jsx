import {getRandomHexColor} from 'components/Statistics/getRandomHexColor'
import css from 'components/Statistics/Statistics.module.css'
export const Statistics = ({ stats, title = false }) => {
    return (
      <section className={css.statsSection}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statsList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={css.item}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
}