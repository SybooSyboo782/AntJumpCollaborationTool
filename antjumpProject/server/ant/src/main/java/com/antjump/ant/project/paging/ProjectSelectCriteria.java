package com.antjump.ant.project.paging;

/**
 * <pre>
 * Class : SelectCriteria
 * Comment: 현재 페이징 정보를 포함한 조회 조건을 담습니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see
 */
public class ProjectSelectCriteria {
    // 페이징 처리를 위한 필드
    private PagingInfo pagingInfo;

    // 필터링 필드
    private String status;

    // 조회 조건에 쓰일 유저 정보
    private int userId;

    // 정렬 조건 필드(필요할 때 추가)



    public ProjectSelectCriteria() {}

    public ProjectSelectCriteria(PagingInfo pagingInfo, String status, int userId) {
        this.pagingInfo = pagingInfo;
        this.status = status;
        this.userId = userId;
    }


    public int getUser() {
        return userId;
    }

    public void setUser(int user) {
        this.userId = user;
    }

    public PagingInfo getPagingInfo() {
        return pagingInfo;
    }

    public void setPagingInfo(PagingInfo pagingInfo) {
        this.pagingInfo = pagingInfo;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "SelectCriteria{" +
                "pagingInfo=" + pagingInfo +
                ", status='" + status + '\'' +
                ", userId=" + userId +
                '}';
    }
}
