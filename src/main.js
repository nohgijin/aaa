/**
 * Module Federation Bootstrap Entry Point
 * 
 * 이 파일은 Module Federation이 초기화된 후에 실제 애플리케이션을 로드합니다.
 * Bootstrap 분리 방식을 사용하여 "eager consumption" 오류를 방지합니다.
 */

// Module Federation이 초기화된 후 bootstrap.js를 동적으로 로드
import('./bootstrap')
