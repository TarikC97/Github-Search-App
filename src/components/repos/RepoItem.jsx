import PropTypes from 'prop-types'
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa'




const RepoItem = ({repo}) => {
    const {
        name,
        description,
        html_url,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return (
    <div className='mb-2 rouned-md card 
                    bd-gray-800 hover:bg-gray-900'>
     <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
            <a href={html_url}>
                <FaLink className='inline mr-1' /> {name}
            </a>
        </h3>
        <p className='mb-3'>
            {description}
        </p>
        <div>
            <div className='mr-2 badge badge-info badge-lg'>
                <FaEye className='mr-2'/>{watchers_count}
            </div>
            <div className='mr-2 badge badge-success badge-lg'>
                <FaStar className='mr-2'/>{stargazers_count}
            </div>
            <div className='mr-2 badge badge-error badge-lg'>
                <FaInfo className='mr-2'/>{open_issues}
            </div>
        </div>
     </div>
    </div>
  )
}
RepoItem.propTypes ={
    repo: PropTypes.object.isRequired,
}

export default RepoItem