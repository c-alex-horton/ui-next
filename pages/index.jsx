import { Text, Card, Button} from '@nextui-org/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Card>
        <h1>
          Hello, world!
        </h1>
        <p>This is a Test.</p>
        <Button>
          Click Me!
        </Button>
      </Card>
    </div>
  )
}
