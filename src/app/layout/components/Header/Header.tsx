import { FC } from 'react'
import styles from './Header.module.scss'

export const Header: FC = () => (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.inner}>
					Header
				</div>
			</div>
		</header>
	)