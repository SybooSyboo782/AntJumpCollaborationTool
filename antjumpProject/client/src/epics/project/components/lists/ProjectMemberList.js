import { Stack} from '@mui/material';
import Box from '@mui/material/Box';
import { projectMembers } from '../../datas/MemberList';
import ProjectMemberCard from '../items/ProjectMemberCard';
import RoleChangeButton from '../items/RoleChangeButton';


function ProjectMemberList({isRoleChange}){
    const members = projectMembers;
    console.log(isRoleChange);
    // const dispatch = useDispatch();
    // useEffect(
    //     ()=>{
    //         dispatch();
    //     },
    //     []
    // );


    return members && (
        <Box sx={{overflowY:"scroll", float: 'right' }} maxHeight={'90%'} maxWidth={'100%'}>
            {members.map(member =>
                <Box key ={member.memberId} sx={{ minWidth:  200, maxWidth: 300,  margin: 'auto', p:1}} >
                    <Stack direction='row' spacing={1}>
                        <ProjectMemberCard member = {member}/>
                        {isRoleChange && <RoleChangeButton member = {member}/>}
                    </Stack>
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectMemberList;