import React from 'react'
import PropTypes from "prop-types"
import { Checkbox, TextField, Avatar } from '@mui/material';
import { SourceDTO } from '../../../../dto/SourceDTO';
import "./ThemeDetail.scss"
const ContentsFilter = ({
                          sources,
                          filterSources,
                          setFilterSources,
                          setFilterText,
                          filterText
}) => {
  const handleInputChange = (e: {target: {value}}) => {
    setFilterText(e.target.value);
  }

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if(checked) {
      setFilterSources(prev => [...prev, id])
    } else {
      setFilterSources(prev => prev.filter(source => source !== id))
    }
  }
  return (
    <div className={'filtersContainer'}>
      <TextField variant={'outlined'}
                 value={filterText}
                 label={"Buscar contenido"}
                 className={'textFilter'}
                 onChange={handleInputChange}/>
        {
          sources.map((source: SourceDTO) =>
            <>
              <Avatar sx={{height: 30, width: 30}} variant={'square'} src={source.icon} />
              <Checkbox onChange={(e) => handleCheckboxChange(source.id, e.target.checked)}
                        color={"default"}
                        checked={filterSources.includes(source.id)}/>
            </>
          )
        }
    </div>
  )
}

ContentsFilter.propTypes = {
  sources: PropTypes.array.isRequired,
  filterSources: PropTypes.array.isRequired,
  setFilterSources: PropTypes.func.isRequired,
  setFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}
export default ContentsFilter