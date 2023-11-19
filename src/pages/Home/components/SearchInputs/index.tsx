import * as z from 'zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { GithubContext } from '../../../../context/GithubContext'

import { SearchInputContainer } from './styles'

interface SearchInputProps {
  postsLength: number
}

const seacrhFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof seacrhFormSchema>

export function SearchInput({ postsLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(seacrhFormSchema),
  })

  const { searchIssues } = useContext(GithubContext)

  async function handleSearchIssues(data: SearchFormInput) {
    await searchIssues(data.query)
  }

  return (
    <SearchInputContainer
      placeholder="Buscar conteúdo"
      onSubmit={handleSubmit(handleSearchIssues)}
    >
      <header>
        <strong>Publicações</strong>
        <span>{postsLength} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        onBlur={handleSubmit(handleSearchIssues)}
      />
    </SearchInputContainer>
  )
}
