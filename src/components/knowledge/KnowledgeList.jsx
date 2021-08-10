import colors from '../../colors/colors'
import styles from './knowledge.module.css'

export default function KnowledgeList({ knowledges }) {
    return (
        <ul className={styles.knowledgeList}>
            { knowledges.map(knowledge => <li key={+new Date() + Object.values(knowledge).toString()}className={styles.knowledge} style={{color: colors.light}}> { knowledge } </li>) }
        </ul>
    )
}