import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateData, DeleteData, ReadData, UpdateData } from './api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState } from './store/store';

export default function Main() {
  const navigate = useNavigate();
  const [c, d] = useRecoilState(textState);
  const [todo, setTodo] = useState({ title: '' });
  const [editTodo, setEditTodo] = useState({ title: '' });
  const [targetId, setTargetId] = useState(null);

  const queryClient = useQueryClient();

  // READ useQuery, 데이터 읽기
  // ['todos'] = 값을 다시 불러오기 위한 키 값 선언, ReadData = api.js 파일에서 가져온 함수
  // data = 서버에서 가져온 데이터가 저장됨
  // data : isData = data에 대한 새로운 이름 선언
  const { data: isData } = useQuery(['todos'], ReadData, {
    onSuccess: (response) => {
      // 서버 통신이 성공했을 때 response값 읽기
      // console.log('onSuccess', response);
    },
  });

  // response값 읽기 , 값을 받아오는 도중엔 undefined 출력될거임
  // console.log('isData', isData);

  // isData가 undefined가 아닐 때 (값을 모두 받아왔을 때) isData 출력
  if (isData !== undefined) {
    // console.log('if + isData', isData);
  }

  // 데이터 쓰기
  // mutate = 서버로 데이터를 보내는 코드
  // mutate(123) << 서버로 123이라는 값을 보냄
  const { mutate: AddMutate, isLoading } = useMutation(CreateData, {
    onSuccess: () => {
      // 통신이 성공하면 useQuery에 선언된 ['todos'] 키 값으로 받아오는 데이터들을 다시 불러오기
      queryClient.invalidateQueries(['todos']);
    },
  });

  // 데이터 삭제
  const { mutate: DeleteMutate } = useMutation(DeleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  // 데이터 수정
  const { mutate: UpdateMutate } = useMutation(UpdateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  // Create 함수 mutate
  const onAddData = (todo) => {
    AddMutate(todo);
  };

  // Delete 함수 mutate
  const onDeleteData = (todoId) => {
    DeleteMutate(todoId);
  };

  // Update 함수 mutate
  const onUpdateData = (todoId, editData) => {
    UpdateMutate({ todoId, editData });
  };

  const onrecoil = () => {
    // event.defaultPrevent();
    d('초기값');
  };

  return (
    <div>
      <button
        onClick={() => {
          onrecoil();
        }}
      >
        값 변경
      </button>
      <br />
      {c}
      <br />
      <button
        onClick={() => {
          navigate('/test');
        }}
      >
        test
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddData(todo);
        }}
      >
        <input
          type='text'
          onChange={(event) => {
            const { value } = event.target;
            setTodo({ ...todo, title: value });
          }}
        />
        <button>추가하기</button>

        <div>
          <input
            type='text'
            placeholder='수정하고싶은 ID'
            onChange={(event) => {
              setTargetId(event.target.value);
            }}
          />
          <input
            type='text'
            placeholder='수정값 입력'
            onChange={(event) => {
              setEditTodo({
                ...editTodo,
                title: event.target.value,
              });
            }}
          />
          <button
            type='button'
            onClick={() => {
              onUpdateData(targetId, editTodo);
            }}
          >
            수정하기
          </button>
        </div>
      </form>
      <div>
        {isData?.map((todo) => (
          <div key={todo.id}>
            {todo.id} : {todo.title}
            <button
              onClick={() => {
                onDeleteData(todo.id);
              }}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
