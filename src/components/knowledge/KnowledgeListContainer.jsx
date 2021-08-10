import knowledges from '../../data/knowledges'
import KnowledgeList from './KnowledgeList'

export default function KnowledgeListContainer() {
    return (
        <KnowledgeList knowledges={knowledges} />
    )
}